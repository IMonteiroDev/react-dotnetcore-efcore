using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models
{
    public class Atividade
    {
        // Parametros
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public Prioridade Prioridade { get; set; }

        //Contrutores
        public Atividade() { }

        public Atividade(int id)
        {
            Id = id;
        }
    }
}
