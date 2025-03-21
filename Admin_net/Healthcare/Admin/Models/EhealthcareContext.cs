using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace Admin.Models;

public partial class EhealthcareContext : DbContext
{
    public EhealthcareContext()
    {
          
    }

    public EhealthcareContext(DbContextOptions<EhealthcareContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AdminTbl> AdminTbls { get; set; }

    public virtual DbSet<AppointmentTbl> AppointmentTbls { get; set; }

    public virtual DbSet<DoctorTbl> DoctorTbls { get; set; }

    public virtual DbSet<DoctorTimeTableAvailableSlot> DoctorTimeTableAvailableSlots { get; set; }

    public virtual DbSet<DoctorTimeTableHoliday> DoctorTimeTableHolidays { get; set; }

    public virtual DbSet<DoctorTimetableTbl> DoctorTimetableTbls { get; set; }

    public virtual DbSet<PatientTbl> PatientTbls { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=ehealthcare;user=KD2-86667-Rudra;password=manager", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.4.2-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<AdminTbl>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("admin_tbl");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
        });

        modelBuilder.Entity<AppointmentTbl>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("appointment_tbl");

            entity.HasIndex(e => e.PatientId, "FKbm21f5fp8jq6c3984npblt2x4");

            entity.HasIndex(e => e.DoctorId, "FKplt82j65dkoide9qvp3oqi3ko");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AppointmentTime)
                .HasMaxLength(6)
                .HasColumnName("appointment_time");
            entity.Property(e => e.AppointmentType)
                .HasMaxLength(255)
                .HasColumnName("appointment_type");
            entity.Property(e => e.DoctorId).HasColumnName("doctor_id");
            entity.Property(e => e.PatientId).HasColumnName("patient_id");

            entity.HasOne(d => d.Doctor).WithMany(p => p.AppointmentTbls)
                .HasForeignKey(d => d.DoctorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKplt82j65dkoide9qvp3oqi3ko");

            entity.HasOne(d => d.Patient).WithMany(p => p.AppointmentTbls)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKbm21f5fp8jq6c3984npblt2x4");
        });

        modelBuilder.Entity<DoctorTbl>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("doctor_tbl");

            entity.HasIndex(e => e.TimeSlotId, "FKilboc5ol8mn4g4gbuji29ftxm");

            entity.HasIndex(e => e.Email, "UK_kldl5nuj29cdoeeqwgdv3ipe5").IsUnique();

            entity.HasIndex(e => e.Username, "UK_t12w5n2uirygsntbxcayi0h23").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Area)
                .HasMaxLength(255)
                .HasColumnName("area");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .HasColumnName("email");
            entity.Property(e => e.Fees).HasColumnName("fees");
            entity.Property(e => e.FirstName)
                .HasMaxLength(30)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender");
            entity.Property(e => e.Languages)
                .HasMaxLength(30)
                .HasColumnName("languages");
            entity.Property(e => e.LastName)
                .HasMaxLength(30)
                .HasColumnName("last_name");
            entity.Property(e => e.MobileNumber)
                .HasMaxLength(10)
                .HasColumnName("mobile_number");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Qualification)
                .HasMaxLength(30)
                .HasColumnName("qualification");
            entity.Property(e => e.Specialization)
                .HasMaxLength(30)
                .HasColumnName("specialization");
            entity.Property(e => e.State)
                .HasMaxLength(255)
                .HasColumnName("state");
            entity.Property(e => e.TimeSlotId).HasColumnName("time_slot_id");
            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .HasColumnName("username");

            entity.HasOne(d => d.TimeSlot).WithMany(p => p.DoctorTbls)
                .HasForeignKey(d => d.TimeSlotId)
                .HasConstraintName("FKilboc5ol8mn4g4gbuji29ftxm");
        });

        modelBuilder.Entity<DoctorTimeTableAvailableSlot>(entity =>
        {
            entity.HasKey(e => new { e.DoctorTimeTableId, e.AvailableSlotsKey })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

            entity.ToTable("doctor_time_table_available_slots");

            entity.Property(e => e.DoctorTimeTableId).HasColumnName("doctor_time_table_id");
            entity.Property(e => e.AvailableSlotsKey)
                .HasMaxLength(6)
                .HasColumnName("available_slots_key");
            entity.Property(e => e.AvailableSlots)
                .HasColumnType("bit(1)")
                .HasColumnName("available_slots");

            entity.HasOne(d => d.DoctorTimeTable).WithMany(p => p.DoctorTimeTableAvailableSlots)
                .HasForeignKey(d => d.DoctorTimeTableId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKry5n89ymt9dcgqhduo1cwya0e");
        });

        modelBuilder.Entity<DoctorTimeTableHoliday>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("doctor_time_table_holidays");

            entity.HasIndex(e => e.DoctorTimeTableId, "FKm5roc68r58vbnk8i0a2y9s34y");

            entity.Property(e => e.DoctorTimeTableId).HasColumnName("doctor_time_table_id");
            entity.Property(e => e.Holidays)
                .HasMaxLength(255)
                .HasColumnName("holidays");

            entity.HasOne(d => d.DoctorTimeTable).WithMany()
                .HasForeignKey(d => d.DoctorTimeTableId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKm5roc68r58vbnk8i0a2y9s34y");
        });

        modelBuilder.Entity<DoctorTimetableTbl>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("doctor_timetable_tbl");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BreakTime)
                .HasColumnType("time")
                .HasColumnName("break_time");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.EndTime)
                .HasColumnType("time")
                .HasColumnName("end_time");
            entity.Property(e => e.SlotDuration).HasColumnName("slot_duration");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.StartTime)
                .HasColumnType("time")
                .HasColumnName("start_time");
        });

        modelBuilder.Entity<PatientTbl>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("patient_tbl");

            entity.HasIndex(e => e.Email, "UK_2bv0hnsjvgpavrw2rd5pknox2").IsUnique();

            entity.HasIndex(e => e.Username, "UK_4oa38yosdebmfyqqg6adwrgxi").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Area)
                .HasMaxLength(255)
                .HasColumnName("area");
            entity.Property(e => e.BloodGroup)
                .HasMaxLength(255)
                .HasColumnName("blood_group");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Dob).HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(30)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender");
            entity.Property(e => e.LastName)
                .HasMaxLength(30)
                .HasColumnName("last_name");
            entity.Property(e => e.MobileNumber)
                .HasMaxLength(10)
                .HasColumnName("mobile_number");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.State)
                .HasMaxLength(255)
                .HasColumnName("state");
            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
