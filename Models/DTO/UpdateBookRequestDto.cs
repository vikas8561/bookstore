namespace bookstore.API.Models.DTO
{
    public class UpdateBookRequestDto
    {
        public String Name { get; set; }
        public String Price { get; set; }
        public String Category { get; set; }
        public String Author { get; set; }
        public String Description { get; set; }
        public String Image { get; set; }
    }
}
