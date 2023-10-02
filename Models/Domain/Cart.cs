namespace bookstore.API.Models.Domain
{
    public class Cart
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public String Price { get; set; }
        public String Category { get; set; }
        public String Author { get; set; }
        public String Description { get; set; }
        public String Image { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
    }
}
