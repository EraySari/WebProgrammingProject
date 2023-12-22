using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebProject.Data;
using WebProject.Models;

namespace WebProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UcakApiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UcakApiController(ApplicationDbContext context)
        {
            _context = context;
        }

        /*// GET: api/UcakApi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ucak>>> GetUcak()
        {
          if (_context.Ucak == null)
          {
              return NotFound();
          }
            return await _context.Ucak.ToListAsync();
        }

        // GET: api/UcakApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ucak>> GetUcak(int id)
        {
          if (_context.Ucak == null)
          {
              return NotFound();
          }
            var ucak = await _context.Ucak.FindAsync(id);

            if (ucak == null)
            {
                return NotFound();
            }

            return ucak;
        }*/

        [HttpGet]
        public IActionResult GetUcaklar([FromQuery] string depature, [FromQuery] string arrival)
        {
            try
            {
                // Linq sorgusu ile filtreleme yapın
                var query = _context.Ucak.AsQueryable();

                if (!string.IsNullOrEmpty(depature))
                {
                    query = query.Where(u => u.Departure == depature);
                }

                if (!string.IsNullOrEmpty(arrival))
                {
                    query = query.Where(u => u.Arrival == arrival);
                }

                

                // Sonuçları döndür
                var result = query.ToList();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PUT: api/UcakApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUcak(int id, Ucak ucak)
        {
            if (id != ucak.UcakID)
            {
                return BadRequest();
            }

            _context.Entry(ucak).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UcakExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UcakApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ucak>> PostUcak(Ucak ucak)
        {
          if (_context.Ucak == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Ucak'  is null.");
          }
            _context.Ucak.Add(ucak);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUcak", new { id = ucak.UcakID }, ucak);
        }

        // DELETE: api/UcakApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUcak(int id)
        {
            if (_context.Ucak == null)
            {
                return NotFound();
            }
            var ucak = await _context.Ucak.FindAsync(id);
            if (ucak == null)
            {
                return NotFound();
            }

            _context.Ucak.Remove(ucak);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UcakExists(int id)
        {
            return (_context.Ucak?.Any(e => e.UcakID == id)).GetValueOrDefault();
        }
    }
}
