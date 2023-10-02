using bookstore.API.Models.Domain;
using bookstore.API.Models.DTO;
using bookstore.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookstore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository cartRepository;

        public CartController(ICartRepository cartRepository)
        {
            this.cartRepository = cartRepository;
        }



        [HttpPost]

        public async Task<IActionResult> CreateCategory(CreateCartRequestDto request)
        {

            // Map Dto to Domain model

            var cart = new Cart
            {
                Name = request.Name,
                Price = request.Price,
                Category = request.Category,
                Author = request.Author,
                Description = request.Description,
                Image = request.Image,
            };

            await cartRepository.CreateAsync(cart);


            // Domain model to DTO

            var response = new CartDto
            {
                Name = cart.Name,
                Price = cart.Price,
                Category = cart.Category,
                Author = cart.Author,
                Description = cart.Description,
                Image = cart.Image,
            };


            return Ok(response);

        }
    }
}
