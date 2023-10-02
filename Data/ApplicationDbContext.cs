using bookstore.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace bookstore.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        // constructor for this class ApplicationDbContext
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<SignUp> SignUps { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Cart> Carts { get; set; }

    }
}
// DbContext class (ApplicationDbContext) always work with the domain model folder