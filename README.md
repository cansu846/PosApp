##  Full Stack Pos Application-  MERN Stack - React-Redux

MERN Stack: MongoDB, Expressjs, Reactjs ve Nodejs 'in baş harflerinden oluşur. Projenin uçtan uca javascript dili ile geliştirilmesine olanak sağlayan bir çözümdür.

### Proje Özellikleri
- Tamamen responsivedir.
- State yönetimi için react-redux toolkit kullanılmıştır.
- Register ve login sayfaları mevcuttur. Local storage kullanılmıştır.
- Menu, ana sayfa kategori, product ve cart özeti, login ve register alanlarından oluşmaktadır.
- Projenin farklı ortamlarda deploy edilebilmesi için .env dosyasında ilgili değikenler tanımlanmıştır
- Render web sitesi aracılıgıyla api ve client projeleri deploy edilmiştir. Aşagıdaki url ler aracılıgıyla projenin canlı haline ulaşabilirsiniz.
  - Frontend için url: https://cansukocaoglu55-pos-application-client.onrender.com
  - Api için url: https://cansukocaoglu55-pos-application.onrender.com
    - Api tarafında aşagdaki url leri kullanarak verilere ulaşabilirisniz:
      - https://cansukocaoglu55-pos-application.onrender.com/api/category/get-all
      - https://cansukocaoglu55-pos-application.onrender.com/api/product/get-all
      - https://cansukocaoglu55-pos-application.onrender.com/api/bill/get-all
      - https://cansukocaoglu55-pos-application.onrender.com/api/user/get-all
- Menu Alanı:
  - Arama cubugu kullanılarak ürün adına göre filtreleme yapılır ve ürünler listelenmesi sağlanır.
- Kategori Alanı:
  - Kategori ekleme ve düzenleme özelliği mevcuttur.
  - Kategori elemanına tıklandıgında kategori ismine göre ürünler filtrelenerek listelenmektedir.
- Product Alanı:
  - Product ekleme ve düzenleme componentleri eklenmiştir.
  - Düzenleme seçeneği ile tüm producların yer aldıgı product sayfasına yönlendirme yapılmaktadır.
    Ürünler bir tablo içerisinde listelenmektedir. Belirli tablo sütunlarında filtreleme özelligi eklenmiştir.
  - Ürün üzerine tıklandıgında ürünler sepete eklenmektedir.
- Cart Total Alanı:
  - Kullanıcının sepetine eklediği ürünlerin listesi, aratoplam, kdv tutarı, toplam tutar,
    sipariş oluşturma ve temizleme butonları yer almaktadır.
  - Ürün üzerine tıklandıgında ürün sepetten çıkarılmaktadır.
  - Her bir ürün için ürün sayısının ayarlanması için arttırma ve azaltma butonları eklenmiştir.
  - Sipariş oluştur butonu ile sepetteki ürünler tabloda listelenir. Tablonun belirli sütunlarına filtreleme özelliği eklenmiştir.
    Böylece kullanıcıların ürün aramalarının kolaylaştırılması amaçlanmıştır.
  - Siparişin tamamlanması için kullanıcı bilgileri alınır ve fatura oluşturulur. Ardından faturaların yer aldıgı fatura sayfasına yönlendirme yapılır.
  - Fatura oluşturulduktan sonra sepetteki ürünler temizlenir.
- Fatura Alanı:
  - Siparişlere ait faturalar listelenir.
  - Tablonun belirli sütunlarına filtreleme özelliği eklenmiştir.
  - Print özelliği ile fatura cıktısı alma özelliği eklenmiştir.
- Kullanıcı Alanı:
  - Alışveriş yapan kullanıcıların bilgileri listelenir.
  - Tablonun belirli sütunlarına filtreleme özelliği eklenmiştir.
- İstatistik Alanı:
  - Topam satış, toplam müşteri, toplam fatura, toplam ürün vb. gibi bilgiler yer almaktadır. Grafikler kullanılarak görselleştirilmiştir.
- Çıkış Alanı:
  - Kullanıcıların oturumu kapatılır. Local storage tan kullanıcı bilgisi silinir ve kullanıcı login sayfasına yönelndirilir.
   
![Screenshot 2024-12-09 013338](https://github.com/user-attachments/assets/bf22f316-5bc5-47de-84cf-6598e4faabdf)
![Screenshot 2024-12-09 013321](https://github.com/user-attachments/assets/8e237289-04c3-4509-ad2a-c0dc22f09946)
![Screenshot 2024-12-09 013359](https://github.com/user-attachments/assets/846bafe0-3c45-43e4-97da-ee3c4b1e0a96)
![Screenshot 2024-12-09 013931](https://github.com/user-attachments/assets/ac456f7c-91f8-4619-b579-1bb9cd00e63e)
![Screenshot 2024-12-09 013950](https://github.com/user-attachments/assets/6df5ed13-01f1-44b6-a2e6-04481d00fa7c)
![Screenshot 2024-12-09 014529](https://github.com/user-attachments/assets/29c5caf1-0560-4ef9-8f0b-8730a50c008f)
![Screenshot 2024-12-09 022656](https://github.com/user-attachments/assets/0a74d8f3-a1a0-4040-9d92-fbd20915cb28)
![Screenshot 2024-12-09 022707](https://github.com/user-attachments/assets/0f5c5ee7-6978-40de-b714-1443de47d548)
![Screenshot 2024-12-09 022736](https://github.com/user-attachments/assets/bfcf05b6-828e-4b93-ba73-5c66d92f847c)
![Screenshot 2024-12-09 024610](https://github.com/user-attachments/assets/5de4e191-7bd9-46ed-a55d-7fbd314738db)
![Screenshot 2024-12-09 024959](https://github.com/user-attachments/assets/0b9ad311-5f85-4220-a3c3-985b5e8d073c)
![Screenshot 2024-12-09 025010](https://github.com/user-attachments/assets/d778d748-09a0-4799-b8a8-0ba0d9f664a4)
![Screenshot 2024-12-09 025035](https://github.com/user-attachments/assets/a2a50a26-5cbb-4d01-b66b-8848b4576ef3)
![Screenshot 2024-12-09 025058](https://github.com/user-attachments/assets/5b43de42-23f8-4f73-8cae-1aaf309b6a58)
![Screenshot 2024-12-09 025906](https://github.com/user-attachments/assets/e2e2a155-211d-4006-81c3-be8c95395fbd)
![Screenshot 2024-12-09 025137](https://github.com/user-attachments/assets/4a2bd8cd-fa34-4ce2-929b-a29c43b53352)
![Screenshot 2024-12-09 025154](https://github.com/user-attachments/assets/567db2f7-237c-427a-970a-0bddbd228688)
![Screenshot 2024-12-09 025829](https://github.com/user-attachments/assets/90319ebc-4ca6-4403-92ee-b002e0409b39)
![Screenshot 2024-12-09 025842](https://github.com/user-attachments/assets/5c531587-7e0e-43bc-8d6b-557a2bfce713)
