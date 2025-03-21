
using Admin.Models;
using Microsoft.EntityFrameworkCore;

namespace Admin
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var connectionStr = builder.Configuration.GetConnectionString("MySqlCon");
            builder.Services.AddDbContext<EhealthcareContext>(options =>
            {
                options.UseMySql(connectionStr,ServerVersion.AutoDetect(connectionStr));
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors((policyBuilder) => {
                policyBuilder.WithOrigins("*").WithMethods("*").WithHeaders("*");
            });

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
