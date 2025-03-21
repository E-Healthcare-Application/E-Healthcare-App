using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Admin.Models.Entities
{
    [Table("Doctor_profile")]
    public class DoctorProfile
    {
        [Key]
        [Column("Doctor_profile_id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id {  get; set; }    

        [Column("Specialization", TypeName = "varchar")]
        [StringLength(50)]
        public string Specialization {  get; set; }

        [Column("ClinicName", TypeName = "varchar")]
        [StringLength(50)]
        public string ClinicName {  get; set; }

        [Column("Clinic_location", TypeName = "varchar")]
        [StringLength(50)]
        public string ClinicLocation {  get; set; }

        [Column("Timings", TypeName = "varchar")]
        [StringLength(50)]
        public string Timings {  get; set; }

        [Column("Consultation_fee", TypeName = "double")]
        [StringLength(50)]
        public double ConsultationFee {  get; set; }

        [Column("Background_details", TypeName = "varchar")]
        [StringLength(100)]
        public string BackgroundDetails {  get; set; }

        [ForeignKey("User")]
        [Column("User_id")]
        public int UserId { get; set; }

    }
}
