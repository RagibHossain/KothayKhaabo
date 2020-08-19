using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;
using Persistence.Initialize;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            //Creating scope to Seed the Database
            using(var scope = host.Services.CreateScope())
            {
                //gives access to service provider
                var services = scope.ServiceProvider;
               //Getting the required services to access data context 
                try{
                 var context = services.GetRequiredService<DataContext>();

                 //If any migration has not yet been migrated or no database is there it will solve the issue
                 context.Database.Migrate();
                
                 Seed.SeedData(context);
                    
                }catch(Exception ex)
                {
                   var logger = services.GetRequiredService<ILogger<Program>>();
                   logger.LogError(ex.StackTrace,"A problem occured while migrating");
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
