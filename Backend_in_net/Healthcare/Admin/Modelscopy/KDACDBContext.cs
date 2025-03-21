using Admin.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Admin.Models
{
    public class KDACDBContext: DbContext
    {
        public KDACDBContext(DbContextOptions<KDACDBContext> options):base(options)
        {
            
        }
        public DbSet<DoctorProfile> DoctorProfiles { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<PatientProfile> PatientProfiles { get; set; }  
    }
}