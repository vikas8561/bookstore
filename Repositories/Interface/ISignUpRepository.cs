using bookstore.API.Models.Domain;

namespace bookstore.API.Repositories.Interface
{
    public interface ISignUpRepository
    {
        Task<SignUp> CreateAsync(SignUp signUp);
        Task<IEnumerable<SignUp>> GetAllAsync();
        Task<SignUp?> GetById(Guid id);
    }
}
