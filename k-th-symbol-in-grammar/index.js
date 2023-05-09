
var kthGrammar = function(N, K) {
    if (N == 1) {
        return 0; // İlk seviyede sadece 0 var, bu yüzden her zaman 0 döndürürüz.
    }
    if (K % 2 == 0) {
        // Eğer K çift sayı ise, o zaman K/2 indexi bir önceki seviyenin tam ortasında olacaktır.
        // Bu nedenle, bir önceki seviyeye giderek kthGrammar(N-1, K/2) işlemini çağırırız.
        // Alt seviyedeki değeri kontrol ederiz. Eğer alt seviyedeki değer 0 ise, 1'i döndürürüz, aksi takdirde 0'ı döndürürüz.
        return kthGrammar(N-1, K/2) == 0 ? 1 : 0;
    } else {
        // Eğer K tek sayı ise, (K+1)/2 indexi bir önceki seviyenin tam ortasındaki bir sayının hemen solunda yer alır.
        // Bu nedenle, bir önceki seviyeye giderek kthGrammar(N-1, (K+1)/2) işlemini çağırırız.
        // Alt seviyedeki değeri kontrol ederiz. Eğer alt seviyedeki değer 0 ise, 0'ı döndürürüz, aksi takdirde 1'i döndürürüz.
        return kthGrammar(N-1, (K+1)/2) == 0 ? 0 : 1;
    }
};

// Time Complexity: O(log k)
// Space Complexity: O(log k)