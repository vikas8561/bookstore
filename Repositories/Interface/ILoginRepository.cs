using bookstore.API.Models.Domain;

namespace bookstore.API.Repositories.Interface
{
    public interface ILoginRepository
    {
        Task<Login> CreateAsync(Login login);
    }
}
