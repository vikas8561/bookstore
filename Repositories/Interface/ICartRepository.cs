using bookstore.API.Models.Domain;

namespace bookstore.API.Repositories.Interface
{
    public interface ICartRepository
    {
        Task<Cart> CreateAsync(Cart cart);
    }
}
