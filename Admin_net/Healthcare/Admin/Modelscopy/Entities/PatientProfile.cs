using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Admin.Models.Entities
{
    [Table("Patient_profile")]
    public class PatientProfile
    {
        [Key]
        [Column("Patient_profile_id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Medical_history")]
        [StringLength(50)]
        public string MedicalHistory {  get; set; }

        [ForeignKey("User")]
        [Column("User_id")]
        public int UserId { get; set; }
    }
}
