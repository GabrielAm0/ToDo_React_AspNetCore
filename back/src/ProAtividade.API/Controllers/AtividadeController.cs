using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AtividadeController : ControllerBase
    {

        private readonly DataContext _context;
        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if (!_context.Atividades.Any())
                return NotFound(new
                {
                    Status = "Erro",
                    Descricao = "Não há atividades cadastradas"
                });

            return Ok(new
            {
                Status = "Sucesso",
                Atividade = _context.Atividades
            }
                    );
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            if (!_context.Atividades.Any())
                return NotFound(new
                {
                    Status = "Erro",
                    Descricao = "Não há atividades cadastradas"
                });

            var atividade = _context.Atividades.FirstOrDefault(atividade => atividade.Id == id);

            if (atividade == null)
                return NotFound(new
                {
                    Status = "Erro",
                    Descricao = "A atividade solicitada não existe"
                });

            return Ok(new
            {
                Status = "Sucesso",
                Atividade = _context.Atividades.FirstOrDefault(atividade => atividade.Id == id)
            }
                    );
        }


        [HttpPost]

        public IActionResult Post(Atividade atividade)
        {
            var AtividadesPost = _context.Atividades;

            AtividadesPost.Add(atividade);
            if (_context.SaveChanges() > 0)
                return Ok(new
                {
                    Status = "Sucesso",
                    atividades = _context.Atividades
                });
            else
                return BadRequest(new
                {
                    Status = "Erro",
                    Descricao = "Não foi possível salvar a atividade"
                });
        }


        [HttpPut("{id}")]

        public IActionResult Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) return BadRequest(new
            {
                Status = "Erro",
                Descricao = "Você está tentando atualizar a atividade errada"
            });

            _context.Update(atividade);
            if (_context.SaveChanges() > 0)
                return Ok(new
                {
                    Status = "Sucesso",
                    Atividade = _context.Atividades.FirstOrDefault(ativ => ativ.Id == id)
                }
                    );
            else
                return NotFound(new
                {
                    Status = "Erro",
                    Descricao = "Não foi possível atualizar a atividade"
                });
        }


        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            var atividade = _context.Atividades.FirstOrDefault(atividade => atividade.Id == id);

            if (atividade == null)
                return NotFound(new
                {
                    Status = "Erro",
                    Descricao = "Você está tentando deletar uma atividade que não existe"
                });

            _context.Remove(atividade);

            if (_context.SaveChanges() > 0)
                return Ok(new
                {
                    Status = "Sucesso",
                    Descricao = "Atividade " + atividade.Id + " deletada com sucesso"
                });
            else
                return BadRequest(new
                {
                    Status = "Erro",
                    Descricao = "Não foi possível deletar a atividade " + atividade.Id
                });
        }


    }
}