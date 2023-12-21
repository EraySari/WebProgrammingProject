namespace WebProject.Models
{
    public class Ucak
    {
        public int UcakID { get; set; }

        public string Departure { get; set; }

        public string Arrival { get; set; }

        public string PlaneModel { get; set; }

        public int Price { get; set; }

        public int Seat { get; set; }

        public DateTime DateTime { get; set; }


        public ICollection<User> Users { get; set; }


        public Ucak()
        {

        }
    }
}
