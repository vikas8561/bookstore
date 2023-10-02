using bookstore.API.Models.Domain;

namespace bookstore.API.Repositories.Interface
{
    public interface IBookRepository
    {
        // Defition for a method not actual implementation
        Task<Book> CreateAsync(Book book);

        Task<IEnumerable<Book>> GetAllAsync();

        //Task<Book?>GetByName(String Name);

        Task<Book?>GetById(Guid id);

        Task<Book?> UpdateAsync(Book book);

        Task<Book?>DeleteAsync(Guid id);
    }
}
