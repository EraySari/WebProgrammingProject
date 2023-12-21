namespace WebProject.Models
{
    public class User
    {

        public int UserID { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public int KoltukNo { get; set; }

        public string Password { get; set; }

        public int UcakID { get; set; }

        public Ucak Ucak { get; set; }

        public User()
        {
            KoltukNo = 0;
        }

    }
}
