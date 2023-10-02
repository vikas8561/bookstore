using Microsoft.AspNetCore.Mvc;

namespace bookstore.API.Models.Domain
{
    public class SignUp
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        
    }
}
