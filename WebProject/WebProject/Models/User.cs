using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations;


namespace WebProject.Models
{
    public class User
    {

        public int UserID { get; set; }

        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "User Name Giriniz!")]
        public string UserName { get; set; }

        [System.ComponentModel.DataAnnotations.Required(ErrorMessage ="First Name Giriniz!")]
        public string FirstName { get; set; }

        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Last Name Giriniz!")]
        public string LastName { get; set; }

        [System.ComponentModel.DataAnnotations.Required]
        [EmailAddress(ErrorMessage ="Düzgün Email Adresi Giriniz!")]
        public string Email { get; set; }

        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Koltuk Numarası Giriniz!")]
        [Range(0,90,ErrorMessage ="Koltuk Numarası 0-90 Arasında Olmalı!")]
        public int KoltukNo { get; set; }

        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Parola Giriniz!")]
        public string Password { get; set; }

        public int UcakID { get; set; }

        public Ucak Ucak { get; set; }

        public User()
        {
            KoltukNo = 0;
        }

    }
}
