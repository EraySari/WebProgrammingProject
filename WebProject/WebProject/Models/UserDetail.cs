using Microsoft.AspNetCore.Identity;

namespace WebProject.Models
{
    public class UserDetail : IdentityUser
    {

        public string Uusername { get; set; }

        public string UFirstName { get; set; }

        public string UFirstLastName { get; set; }



    }
}
