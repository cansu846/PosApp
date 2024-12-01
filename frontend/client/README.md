 flex: yatay ve dikey hizalarda nasıl görüneceğini, öğelerin kendi içinde hizalanmalarını ve sırasını belirlemek için kullanılır.Tüm çözünürlüklerde ve cihazlarda daha hızlı ve esnek bir yapı sunar.

Flex genel anlamıyla bir CSS özelliğinin adı değil, yapının adıdır. Dolayısı ile flex yapısı altında hem kapsayıcı (container) için hemde içindeki öğeler (items) için birden fazla flex özelliği bulunmaktadır. 


max-w özelliği, öğenin genişliğinin alabileceği en büyük değeri belirler. Yani:

Bir öğe, içeriğine veya konteynerine göre genişleyebilir, ancak max-w ile belirtilen değeri aşamaz.

gap: 10px; /* veya **row-gap ve column-gap kullanarak 
yatay ve dikey boşlukları kontrol edebilirsiniz** */
flexbox, grid ve multi-column yapılarda esnek öğeler arasındaki boşluğu ayarlamak için kullanılmaktadır.

justify-content
Öğelerin yatay eksende hizasını ayarlamak için kullanılır.

align-items
Öğelerin dikey eksende hizasını ayarlamak için kullanılır

flex-grow
Bir öğeyi diğerlerine göre daha büyük göstermek için kullanılır. 

flex-shrink
Bu aslında flex-grow özelliğinin tam aksine, küçültme işlemi için kullanılır. 

flex-basis
Öğelerin eğer alanı yetiyorsa olması gereken genişliği belirlemek için kullanılır.

flex
Sırasıyla flex-grow, flex-shrink ve flex-basis özelliklerinin kısa kullanımıdır. İlk değeri zorunlu olup (shrink ve basis) değerlerini belirtmek zorunlu değildir. Varsayılan olarak 0 1 auto değerine sahiptir

Offset terimi, bir öğenin bir diğerine veya konteynerine göre konumlandırılmasını ifade eder. Offset, genellikle öğenin yerleşim konumunu belirlemek için kullanılan değerlerdir. Bu, özellikle CSS positioning (konumlandırma) özellikleriyle birlikte kullanılır.


CSS'de overflow özelliği, bir elementin içeriği, elementin belirlenen boyutlarını (genişlik veya yükseklik) aştığında, bu içeriğin nasıl işleneceğini kontrol eder. Bu özellik, taşma durumlarında içeriğin görünürlüğünü, kaydırılabilirliğini veya kırpılmasını yönetmek için kullanılır.

::-webkit-scrollbar
Bu, WebKit tabanlı tarayıcılarda scrollbar'ı (kaydırma çubuğunu) seçmek için kullanılan pseudo-element'tir.
Tarayıcının yerleşik kaydırma çubuğunu özelleştirmek veya gizlemek için kullanılır.