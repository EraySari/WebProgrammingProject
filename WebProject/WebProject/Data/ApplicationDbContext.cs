using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebProject.Models;

namespace WebProject.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserDetail>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<WebProject.Models.User>? User { get; set; }
        public DbSet<WebProject.Models.Ucak>? Ucak { get; set; }
    }
}