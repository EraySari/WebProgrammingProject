using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebProject.Data;
using WebProject.Models;

namespace WebProject.Controllers
{
    [Authorize(Roles = "Admin")]
    public class UcaksController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UcaksController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Ucaks
        public async Task<IActionResult> Index()
        {
              return _context.Ucak != null ? 
                          View(await _context.Ucak.ToListAsync()) :
                          Problem("Entity set 'ApplicationDbContext.Ucak'  is null.");
        }

        // GET: Ucaks/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Ucak == null)
            {
                return NotFound();
            }

            var ucak = await _context.Ucak
                .FirstOrDefaultAsync(m => m.UcakID == id);
            if (ucak == null)
            {
                return NotFound();
            }

            return View(ucak);
        }

        // GET: Ucaks/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Ucaks/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("UcakID,Departure,Arrival,PlaneModel,Price,Seat,DateTime")] Ucak ucak)
        {
            
                _context.Add(ucak);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            
            
        }

        // GET: Ucaks/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Ucak == null)
            {
                return NotFound();
            }

            var ucak = await _context.Ucak.FindAsync(id);
            if (ucak == null)
            {
                return NotFound();
            }
            return View(ucak);
        }

        // POST: Ucaks/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("UcakID,Departure,Arrival,PlaneModel,Price,Seat,DateTime")] Ucak ucak)
        {
            if (id != ucak.UcakID)
            {
                return NotFound();
            }

            //if (ModelState.IsValid)
            //{
                try
                {
                    _context.Update(ucak);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UcakExists(ucak.UcakID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            //}
           // return View(ucak);
        }

        // GET: Ucaks/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Ucak == null)
            {
                return NotFound();
            }

            var ucak = await _context.Ucak
                .FirstOrDefaultAsync(m => m.UcakID == id);
            if (ucak == null)
            {
                return NotFound();
            }

            return View(ucak);
        }

        // POST: Ucaks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Ucak == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Ucak'  is null.");
            }
            var ucak = await _context.Ucak.FindAsync(id);
            if (ucak != null)
            {
                _context.Ucak.Remove(ucak);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UcakExists(int id)
        {
          return (_context.Ucak?.Any(e => e.UcakID == id)).GetValueOrDefault();
        }
    }
}
