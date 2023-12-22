using System.ComponentModel.DataAnnotations;

namespace WebProject.Models
{
    public class Ucak
    {
        public int UcakID { get; set; }

        [Required(ErrorMessage ="Kalkış Noktası Giriniz!")]
        public string Departure { get; set; }

        [Required(ErrorMessage = "Varış Noktası Giriniz!")]
        public string Arrival { get; set; }

        [Required(ErrorMessage = "Uçak Modelini Giriniz!")]
        public string PlaneModel { get; set; }

        [Required(ErrorMessage = "Bilet Ücretini Giriniz!")]
        [Range(300, 1200, ErrorMessage ="Bilet Fiyat Aralığı 300 - 1200 Arasında Olmalıdır!")]
        public int Price { get; set; }

        [Required(ErrorMessage = "Koltuk Sayısını Giriniz!")]
        [Range(30, 90, ErrorMessage = "Koltuk Sayısı 30 - 90 Aralığında Olmalıdır! ")]
        public int Seat { get; set; }

        [Required(ErrorMessage = "Kalkış Zamanını Giriniz!")]
        public DateTime DateTime { get; set; }


        public ICollection<User> Users { get; set; }


        public Ucak()
        {

        }
    }
}
