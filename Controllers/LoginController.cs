using bookstore.API.Models.Domain;
using bookstore.API.Models.DTO;
using bookstore.API.Repositories.Implementation;
using bookstore.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookstore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginRepository loginRepository;

        public LoginController(ILoginRepository loginRepository)
        {
            this.loginRepository = loginRepository;
        }
        
        [HttpPost]

        public async Task<IActionResult> CreateCategory(CreateLoginRequestDto request)
        {
            // map to domain model

            var login = new Login
            {
                Email = request.Email,
                Password = request.Password,
            };

            await loginRepository.CreateAsync(login);

            // Domain model to Dto

            var response = new LoginDto
            {
                Email = login.Email,
                Password = login.Password,
            };

            return Ok(response);
        }


    }
}
