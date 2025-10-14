import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export const accountService = {
  /**
   * Link akun dengan provider (Google)
   */
  async linkAccount(user: User, provider: string, providerData: any) {
    try {
      const { data, error } = await supabase
        .from('user_identities')
        .insert({
          user_id: user.id,
          provider,
          provider_id: providerData.sub,
          email: providerData.email
        });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error linking account:', error);
      throw error;
    }
  },

  /**
   * Cek apakah email sudah terdaftar
   */
  async findUserByEmail(email: string) {
    try {
      const { data: identities, error } = await supabase
        .from('user_identities')
        .select('user_id, provider')
        .eq('email', email.toLowerCase());

      if (error) throw error;
      return identities;
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  },

  /**
   * Gabungkan data dari akun yang terhubung
   */
  async mergeAccounts(primaryUserId: string, secondaryUserId: string) {
    try {
      // Pindahkan semua data terkait ke akun utama
      const updates = [
        // Update user_identities
        supabase
          .from('user_identities')
          .update({ user_id: primaryUserId })
          .eq('user_id', secondaryUserId),
        
        // Update data profil jika ada
        supabase
          .from('profiles')
          .update({ id: primaryUserId })
          .eq('id', secondaryUserId),
        
        // Update data lainnya sesuai kebutuhan
        // ...
      ];

      await Promise.all(updates);
    } catch (error) {
      console.error('Error merging accounts:', error);
      throw error;
    }
  }
};