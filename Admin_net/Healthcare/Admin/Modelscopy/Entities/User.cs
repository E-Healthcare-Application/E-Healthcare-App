using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Admin.Models.Entities
{
    public enum UserRole
    {
        DOCTOR,
        PATIENT,
    }

    public enum Genders
    {
        MALE,
        FEMALE,
        OTHERS
    }

    [Table("User")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("User_id", TypeName = "int")]
        public int Id { get; set; }

        [Column("Name",TypeName ="varchar")]
        [StringLength(50)]
        public string Name { get; set; }

        [Column("Email", TypeName = "varchar")]
        [StringLength(50)]
        public string Email { get; set; }

        [Column("Password", TypeName = "varchar")]
        [StringLength(50)]
        public string Password { get; set; }

        [Column("Phone", TypeName = "varchar")]
        [StringLength(50)]
        public string Phone { get; set; }

        [Column("Age", TypeName = "int")]
        public int Age { get; set; }


        public Genders Gender { get; set; }

        public UserRole Role { get;set; }

        [Column("Created_at")]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [Column("Updated_at")]
        public DateTime UpdatedAt { get; set; }
    }
}
