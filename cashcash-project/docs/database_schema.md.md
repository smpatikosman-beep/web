# Firebase Veritabanı Şeması (CASHCASH)

## Koleksiyonlar:

### users
- uid: string
- email: string
- username: string
- points: number (Toplam puan)
- balance_tl: number (TL bakiyesi)
- balance_klad: number (Uygulama içi para)
- multiplier: number (Çarpan, örn: 1.00)
- referral_code: string (Davet kodu)
- referred_by: string
- ads_watched_today: number
- streak: number (Ateş serisi)
- is_hidden_leaderboard: boolean

### config
- competition_end_date: timestamp (30 gün sonrası)
- dome_fill_percentage: number (0-100)
- top_10_winners: array

### withdrawals
- request_id: string
- uid: string
- amount: number
- iban: string
- status: string (Beklemede, Onaylandı, Reddedildi)