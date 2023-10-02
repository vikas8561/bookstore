using bookstore.API.Data;
using bookstore.API.Models.Domain;
using bookstore.API.Models.DTO;
using bookstore.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace bookstore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {

        private readonly IBookRepository bookRepository;

        public BookController(IBookRepository bookRepository)
        {
            this.bookRepository = bookRepository;
        }



        [HttpPost]

        public async Task<IActionResult> CreateCategory(CreateBookRequestDto request)
        {

            // Map Dto to Domain model

            var book = new Book
            {
                Name = request.Name,
                Price = request.Price,
                Category = request.Category,
                Author = request.Author,
                Description = request.Description,
                Image = request.Image,
            };

            await bookRepository.CreateAsync(book);


            // Domain model to DTO

            var response = new BookDto
            {
                Name = book.Name,
                Price = book.Price,
                Category = book.Category,
                Author = book.Author,
                Description = book.Description,
                Image = book.Image,
            };


            return Ok(response);

        }

        [HttpGet]

        public async Task<IActionResult> GetAllBooks()
        {
            var books = await bookRepository.GetAllAsync();

            // Map domain model to Dto

            var response = new List<BookDto>();
            foreach (var book in books)
            {
                response.Add(new BookDto
                {
                    Id = book.Id,
                    Name = book.Name,
                    Price = book.Price,
                    Category = book.Category,
                    Author = book.Author,
                    Description = book.Description,
                    Image = book.Image,
                });
            }
            return Ok(response);
        }

        // GET : https://localhost:7016/api/Book/{Name}

       /* [HttpGet]
        [Route("{Name:String}")]
        public async Task<IActionResult> GetBookByName([FromRoute] String Name)
        {
            var existingCategory = await bookRepository.GetByName(Name);

            if (existingCategory is null)
            {
                return NotFound();
            }

            var response = new BookDto
            {
                Id = existingCategory.Id,
                Name = existingCategory.Name,
                Price = existingCategory.Price,
                Category = existingCategory.Category,
                Author = existingCategory.Author,
                Description = existingCategory.Description,
                Image = existingCategory.Image,
            };

            return Ok(response);
        }
       */

        // GET : https://localhost:7016/api/Book/{Id}

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBookById([FromRoute] Guid id)
        {
            var existingCategory = await bookRepository.GetById(id);

            if (existingCategory is null)
            {
                return NotFound();
            }

            var response = new BookDto
            {
                Id = existingCategory.Id,
                Name = existingCategory.Name,
                Price = existingCategory.Price,
                Category = existingCategory.Category,
                Author = existingCategory.Author,
                Description = existingCategory.Description,
                Image = existingCategory.Image,
            };

            return Ok(response);
        }

        // PUT : https://localhost:7016/api/Book/{Id}
        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> EditBook([FromRoute] Guid id, UpdateBookRequestDto request)
        {
            // Convert Dto to Domain Model

            var book = new Book
            {
                Id = id,
                Name = request.Name,
                Price = request.Price,
                Category = request.Category,
                Author = request.Author,
                Description = request.Description,
                Image = request.Image,
            };

            await bookRepository.UpdateAsync(book);

            if (book == null)
            {
                return NotFound();
            }

            // Convert Domain model to Dto

            var response = new BookDto
            {
                Id = book.Id,
                Name = request.Name,
                Price = request.Price,
                Category = request.Category,
                Author = request.Author,
                Description = request.Description,
                Image = request.Image
            };
            return Ok(response);
        }

        // DELETE : https://localhost:7016/api/Book/{Id}

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteCategory([FromRoute] Guid id)
        {
            var book = await bookRepository.DeleteAsync(id);
            if(book == null) { 
            return NotFound();
            }

            // convert domain model to Dto

            var response = new BookDto
            {
                Id = book.Id,
                Name = book.Name,
                Price = book.Price,
                Category = book.Category,
                Author = book.Author,
                Description = book.Description,
                Image = book.Image
            };

            return Ok(response);
        }
    }
}

