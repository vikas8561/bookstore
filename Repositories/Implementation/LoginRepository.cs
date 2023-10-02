using bookstore.API.Data;
using bookstore.API.Models.Domain;
using bookstore.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace bookstore.API.Repositories.Implementation
{
    public class LoginRepository: ILoginRepository
    {
        private readonly ApplicationDbContext dbContext;
        public LoginRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Login> CreateAsync(Login login)
        {
            await dbContext.Logins.AddAsync(login);
            await dbContext.SaveChangesAsync();

            return login;
        }
    }
}
