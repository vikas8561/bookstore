using bookstore.API.Data;
using bookstore.API.Models.Domain;
using bookstore.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace bookstore.API.Repositories.Implementation
{
    public class SignUpRepository: ISignUpRepository
    {
        private readonly ApplicationDbContext dbContext;

        public SignUpRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<SignUp> CreateAsync(SignUp signUp)
        {
            await dbContext.SignUps.AddAsync(signUp);
            await dbContext.SaveChangesAsync();

            return signUp;
        }

        public async Task<IEnumerable<SignUp>> GetAllAsync()
        {
            return await dbContext.SignUps.ToListAsync();
        }

        public async Task<SignUp?> GetById(Guid id)
        {
            return await dbContext.SignUps.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
