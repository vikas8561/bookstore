using bookstore.API.Data;
using bookstore.API.Models.Domain;
using bookstore.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace bookstore.API.Repositories.Implementation
{
    public class CartRepository : ICartRepository
    {
        private readonly ApplicationDbContext dbContext;
        public CartRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Cart> CreateAsync(Cart cart)
        {
            await dbContext.Carts.AddAsync(cart);
            await dbContext.SaveChangesAsync();

            return cart;
        }
    }
}
