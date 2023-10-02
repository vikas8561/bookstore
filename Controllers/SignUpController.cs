using bookstore.API.Models.Domain;
using bookstore.API.Models.DTO;
using bookstore.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookstore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private readonly ISignUpRepository signUpRepository;

        public SignUpController(ISignUpRepository signUpRepository)
        {
            this.signUpRepository = signUpRepository;
        }

        [HttpPost]

        public async Task<IActionResult> CreateCategory(CreateSignUpRequestDto request)
        {
            // Map to domain model

            var signUp = new SignUp
            {
                Name = request.Name,
                Password = request.Password,
                Email = request.Email,
            };

            await signUpRepository.CreateAsync(signUp);

            // Domain model to Dto

            var response = new SignUpDto
            {
                Name = signUp.Name,
                Password = signUp.Password,
                Email = signUp.Email,
            };

            return Ok(response);
        }

        // Get Method

        [HttpGet]

        public async Task<IActionResult> GetAllSignUp()
        {
            var signups = await signUpRepository.GetAllAsync();

            // Map domain model to Dto

            var response = new List<SignUpDto>();
            foreach (var signup in signups)
            {
                response.Add(new SignUpDto
                {
                    Id = signup.Id,
                    Name = signup.Name,
                    Password = signup.Password,
                    Email = signup.Email,
                });
            }
            return Ok(response);
        }

        // Get by Id

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetSignUpById([FromRoute] Guid id)
        {
            var existingCategory = await signUpRepository.GetById(id);

            if (existingCategory is null)
            {
                return NotFound();
            }

            var response = new SignUpDto
            {
                Id = existingCategory.Id,
                Name = existingCategory.Name,
                Password = existingCategory.Password,
                Email = existingCategory.Email
            };

            return Ok(response);
        }
    }
}
