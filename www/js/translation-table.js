﻿angular.module('tabelaAppTranslations',['pascalprecht.translate'])
    .config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('pt',{
            championships: {
                Acreano: 'Campeonato Acreano',
                Argentino: 'Campeonato Argentino',
                Alagoano: 'Campeonato Alagoano',
                Alemão: 'Alemanha - Bundesliga',
                Amazonense: 'Campeonato Amazonense',
                Amistosos_Internacionais: 'Amistosos Internacionais',
                Amistosos_Nacionais: 'Amistosos Nacionais',
                Baiano: 'Campeonato Baiano',
                Brasileiro___Série_A: 'Campeonato Brasileiro - Série A',
                Brasileiro___Série_B: 'Campeonato Brasileiro - Série B',
                Brasileiro___Série_C: 'Campeonato Brasileiro - Série C',
                Brasileiro___Série_D: 'Campeonato Brasileiro - Série D',
                Brasiliense___Única: 'Campeonato Brasiliense - Única',
                Capixaba: 'Campeonato Capixaba',
                Carioca: 'Campeonato Carioca',
                Catarinense: 'Campeonato Catarinense',
                Cearense: 'Campeonato Cearense',
                Copa_do_Brasil: 'Copa do Brasil',
                Copa_América___Única: 'Copa América',
                Copa_do_Mundo___Feminina: 'Copa do Mundo Feminina',
                Copa_do_Nordeste: 'Copa do Nordeste',
                Copa_São_Paulo_de_Júnior: 'Copa São Paulo de Futebol Júnior',
                Copa_Verde: 'Copa Verde',
                Copas_Europeias: 'Copas Euroéias',
                diarios: 'JOGOS DE HOJE',
                Espanhol: 'Espanha - Liga BBVA',
                Flórida_Cup: 'Florida Cup',
                Francês: 'França - Ligue 1',
                Gaúcho: 'Campeonato Gaúcho',
                Goiano: 'Campeonato Goiano',
                Granada_Cup: 'Granada Cup',
                Inglês: 'Reino Unido - Premier League',
                Italiano: 'Itália - Série A',
                Libertadores: 'Taça Libertadores da América',
                Liga_dos_Campeões: 'Champions League',
                Liga_Europa: 'Liga Europa',
                Maranhense: 'Campeonato Maranhense',
                Mato_Grossense: 'Campeonato Mato-Grossense',
                Mineiro: 'Campeonato Mineiro',
                Paraense: 'Campeonato Paraense',
                Paraibano: 'Campeonato Paraibano',
                Paranaense: 'Campeonato Paranaense',
                Paulista___2ª_Divisão: 'Campeonato Paulista - Segunda Divisão',
                Paulista___Série_A1: 'Campeonato Paulista - Série A1',
                Paulista___Série_A2: 'Campeonato Paulista - Série A2',
                Paulista___Série_A3: 'Campeonato Paulista - Série A3',
                Pernambucano: 'Campeonato Pernambucano',
                Piauiense: 'Campeonato Piauiense',
                Português: 'Portugal - Primeira Liga',
                Potiguar: 'Campeonato Potiguar',
                Rondoniense: 'Campeonato Rondoniense',
                Roraiemense: 'Campeonato Roraiemense',
                Sergipano: 'Campeonato Sergipano',
                Sul_Mato_Grossense: 'Campeonato Sul-Mato-Grossense',
                Taça_Super_Series: 'Taça Super Series',
                Tocantinense: 'Campeonato Tocantinense'
            },
            no_championship: 'Nenhum Campeonato no momento.',
            loading: 'Carregando...',
            match_scheduled: ' Agendado para {{date}}',
            match_finished: 'Finalizado em {{date}}',
            match_progress: 'Em andamento',
            round: '{{round_number}}ª rodada',
            stadium: 'Estádio {{stadium}}',
            place: 'local: {{place}}',
            time: 'ás {{time}}',
            goal_description: 'aos {{goal_time}} do {{gol.period}}º tempo {{goal_extra}}',
            standings : {
                title: 'Classificação',
                team: 'Clube',
                points: 'PG',
                matches: 'JG',
                victories: 'VI',
                goal_overall: 'SG'
            }
        })
            .translations('en', {
                championships: {
                    Acreano: 'Brazil - Campeonato Acreano',
                    Argentino: 'Brazil - Campeonato Argentino',
                    Alagoano: 'Brazil - Campeonato Alagoano',
                    Alemão: 'Germany - Alemanha - Bundesliga',
                    Amazonense: 'Brazil - Campeonato Amazonense',
                    Amistosos_Internacionais: 'International Friendly Games',
                    Amistosos_Nacionais: 'National Friendly Games',
                    Baiano: 'Brazil - Campeonato Baiano',
                    Brasileiro___Série_A: 'Brazil - Campeonato Brasileiro - Série A',
                    Brasileiro___Série_B: 'Brazil - Campeonato Brasileiro - Série B',
                    Brasileiro___Série_C: 'Brazil - Campeonato Brasileiro - Série C',
                    Brasileiro___Série_D: 'Brazil - Campeonato Brasileiro - Série D',
                    Brasiliense___Única: 'Brazil - Campeonato Brasiliense - Única',
                    Capixaba: 'Brazil - Campeonato Capixaba',
                    Carioca: 'Brazil - Campeonato Carioca',
                    Catarinense: 'Brazil - Campeonato Catarinense',
                    Cearense: 'Brazil - Campeonato Cearense',
                    Copa_do_Brasil: 'Brazil - Copa do Brasil',
                    Copa_do_Nordeste: 'Brazil - Copa do Nordeste',
                    Copa_América___Única: 'Brazil - Copa América',
                    Copa_do_Mundo___Feminina: 'Brazil - Copa do Mundo Feminina',
                    Copa_São_Paulo_de_Júnior: 'Brazil - Copa São Paulo de Futebol Júnior',
                    Copa_Verde: 'Brazil - Copa Verde',
                    Copas_Europeias: 'European Cup',
                    diarios: 'TODAY MATCHES',
                    Espanhol: 'Spain - Liga BBVA',
                    Flórida_Cup: 'Florida Cup',
                    Francês: 'France - Ligue 1',
                    Gaúcho: 'Brazil - Campeonato Gaúcho',
                    Goiano: 'Brazil - Campeonato Goiano',
                    Granada_Cup: 'Granada Cup',
                    Inglês: 'UK - Premier League',
                    Italiano: 'Italy - Série A',
                    Libertadores: 'South America - Libertadores',
                    Liga_dos_Campeões: 'Champions League',
                    Liga_Europa: 'Europe League',
                    Maranhense: 'Brazil - Campeonato Maranhense',
                    Mato_Grossense: 'Brazil - Campeonato Mato-Grossense',
                    Mineiro: 'Brazil - Campeonato Mineiro',
                    Paraense: 'Brazil - Campeonato Paraense',
                    Paraibano: 'Brazil - Campeonato Paraibano',
                    Paranaense: 'Brazil - Campeonato Paranaense',
                    Paulista___2ª_Divisão: 'Brazil - Campeonato Paulista - Segunda Divisão',
                    Paulista___Série_A1: 'Brazil - Campeonato Paulista - Série A1',
                    Paulista___Série_A2: 'Brazil - Campeonato Paulista - Série A2',
                    Paulista___Série_A3: 'Brazil - Campeonato Paulista - Série A3',
                    Pernambucano: 'Brazil - Campeonato Pernambucano',
                    Piauiense: 'Brazil - Campeonato Piauiense',
                    Português: 'Portugal - Primeira Liga',
                    Potiguar: 'Brazil - Campeonato Potiguar',
                    Rondoniense: 'Brazil - Campeonato Rondoniense',
                    Roraiemense: 'Brazil - Campeonato Roraiemense',
                    Sergipano: 'Brazil - Campeonato Sergipano',
                    Sul_Mato_Grossense: 'Brazil - Campeonato Sul-Mato-Grossense',
                    Taça_Super_Series: 'Taça Super Series',
                    Tocantinense: 'Brazil - Campeonato Tocantinense'
                },
                no_championship: 'No Championship at the moment',
                loading: 'Loading...',
                match_scheduled: 'Scheduled to {{date}}',
                match_finished: 'Ended in {{date}}',
                match_progress: 'In progress',
                round: '{{round_number}} round',
                stadium: 'Stadium {{stadium}}',
                place: 'Place: {{place}}',
                time: 'at {{time}}',
                goal_description: 'at {{goal_period == 2 ? 45 + goal_time : goal_time}} minutes {{goal_extra}}',
                standings : {
                    title: 'Standings',
                    team: 'Team',
                    points: 'PT',
                    matches: 'M',
                    victories: 'W',
                    goal_overall: 'G'
                }
            })
            .translations('de', {
                championships: {
                    Acreano: 'Brasilien - Campeonato Acreano',
                    Argentino: 'Brasilien - Campeonato Argentino',
                    Alagoano: 'Brasilien - Campeonato Alagoano',
                    Alemão: 'Bundesliga',
                    Amazonense: 'Brasilien - Campeonato Amazonense',
                    Amistosos_Internacionais: 'International Freundschaftspiele',
                    Amistosos_Nacionais: 'Bundesfreundschaftspiele',
                    Baiano: 'Brasilien - Campeonato Baiano',
                    Brasileiro___Série_A: 'Brasilien - Campeonato Brasileiro - Série A',
                    Brasileiro___Série_B: 'Brasilien - Campeonato Brasileiro - Série B',
                    Brasileiro___Série_C: 'Brasilien - Campeonato Brasileiro - Série C',
                    Brasileiro___Série_D: 'Brasilien - Campeonato Brasileiro - Série D',
                    Brasiliense___Única: 'Brasilien - Campeonato Brasiliense - Única',
                    Capixaba: 'Brasilien - Campeonato Capixaba',
                    Carioca: 'Brasilien - Campeonato Carioca',
                    Catarinense: 'Brasilien - Campeonato Catarinense',
                    Cearense: 'Brasilien - Campeonato Cearense',
                    Copa_América___Única: 'Brasilien - Copa América',
                    Copa_do_Mundo___Feminina: 'Brasilien - Copa do Mundo Feminina',
                    Copa_do_Brasil: 'Brasilien - Copa do Brasil',
                    Copa_do_Nordeste: 'Brasilien - Copa do Nordeste',
                    Copa_São_Paulo_de_Júnior: 'Brasilien - Copa São Paulo de Futebol Júnior',
                    Copa_Verde: 'Brasilien - Copa Verde',
                    Copas_Europeias: 'Europaniche Tour',
                    diarios: 'HEUTIGE SPIELE',
                    Espanhol: 'Spanien - Liga BBVA',
                    Flórida_Cup: 'Florida Cup',
                    Francês: 'Frankreich - Ligue 1',
                    Gaúcho: 'Brasilien - Campeonato Gaúcho',
                    Goiano: 'Brasilien - Campeonato Goiano',
                    Granada_Cup: 'Granada Cup',
                    Inglês: 'Premier League',
                    Italiano: 'Italien - Série A',
                    Liga_dos_Campeões: 'Champions League',
                    Liga_Europa: 'Europa League',
                    Maranhense: 'Brasilien - Campeonato Maranhense',
                    Mato_Grossense: 'Brasilien - Campeonato Mato-Grossense',
                    Mineiro: 'Brasilien - Campeonato Mineiro',
                    Paraense: 'Brasilien - Campeonato Paraense',
                    Paraibano: 'Brasilien - Campeonato Paraibano',
                    Paranaense: 'Brasilien - Campeonato Paranaense',
                    Paulista___2ª_Divisão: 'Brasilien - Campeonato Paulista - Segunda Divisão',
                    Paulista___Série_A1: 'Brasilien - Campeonato Paulista - Série A1',
                    Paulista___Série_A2: 'Brasilien - Campeonato Paulista - Série A2',
                    Paulista___Série_A3: 'Brasilien - Campeonato Paulista - Série A3',
                    Pernambucano: 'Brasilien - Campeonato Pernambucano',
                    Piauiense: 'Brasilien - Campeonato Piauiense',
                    Português: 'Portugal - Primeira Liga',
                    Potiguar: 'Brasilien - Campeonato Potiguar',
                    Rondoniense: 'Brasilien - Campeonato Rondoniense',
                    Roraiemense: 'Brasilien - Campeonato Roraiemense',
                    Sergipano: 'Brasilien - Campeonato Sergipano',
                    Sul_Mato_Grossense: 'Brasilien - Campeonato Sul-Mato-Grossense',
                    Taça_Super_Series: 'Super Series Tour',
                    Tocantinense: 'Brasilien - Campeonato Tocantinense'
                },
                no_championship: 'Zur Zeit keine Meisterschaft gefunden.',
                loading: 'laden...',
                match_scheduled: 'am {{date}}',
                match_finished: 'beendet am {{date}}',
                match_progress: 'läuft aktuell',
                round: '{{round_number}} runde',
                stadium: 'Arena {{stadium}}',
                place: 'Ort: {{place}}',
                time: 'um {{time}}',
                goal_description: 'am {{goal_time * goal_period}} Minuten {{goal_extra}}',
                standings : {
                    title: 'Tabelle',
                    team: 'M',
                    points: 'P',
                    matches: 'Sp',
                    victories: 'Si',
                    goal_overall: 'T'
                }
            })
            .translations('es', {
                championships: {
                    Acreano: 'Brasil - Campeonato Acreano',
                    Argentino: 'Campeonato Argentino',
                    Alagoano: 'Brasil - Campeonato Alagoano',
                    Alemão: 'Bundesliga',
                    Amazonense: 'Brasil - Campeonato Amazonense',
                    Amistosos_Internacionais: 'Amistosos Internacionales',
                    Amistosos_Nacionais: 'Amistosos Nacionales',
                    Baiano: 'Brasil - Campeonato Baiano',
                    Brasileiro___Série_A: 'Brasil - Campeonato Brasileiro - Série A',
                    Brasileiro___Série_B: 'Brasil - Campeonato Brasileiro - Série B',
                    Brasileiro___Série_C: 'Brasil - Campeonato Brasileiro - Série C',
                    Brasileiro___Série_D: 'Brasil - Campeonato Brasileiro - Série D',
                    Brasiliense___Única: 'Brasil - Campeonato Brasiliense - Única',
                    Capixaba: 'Brasil - Campeonato Capixaba',
                    Carioca: 'Brasil - Campeonato Carioca',
                    Catarinense: 'Brasil - Campeonato Catarinense',
                    Cearense: 'Brasil - Campeonato Cearense',
                    Copa_do_Brasil: 'Brasil - Copa do Brasil',
                    Copa_América___Única: 'Brasil - Copa América',
                    Copa_do_Mundo___Feminina: 'Brasil - Copa do Mundo Feminina',
                    Copa_do_Nordeste: 'Brasil - Copa do Nordeste',
                    Copa_São_Paulo_de_Júnior: 'Brasil - Copa São Paulo de Futebol Júnior',
                    Copa_Verde: 'Brasil - Copa Verde',
                    Copas_Europeias: 'Copas Europeias',
                    diarios: 'JUEGOS DE HOY',
                    Espanhol: 'España - Liga BBVA',
                    Flórida_Cup: 'Florida Cup',
                    Francês: 'Francia - Ligue 1',
                    Gaúcho: 'Brasil - Campeonato Gaúcho',
                    Goiano: 'Brasil - Campeonato Goiano',
                    Granada_Cup: 'Granada Cup',
                    Inglês: 'Premier League',
                    Italiano: 'Italia - Série A',
                    Liga_dos_Campeões: 'Champions League',
                    Liga_Europa: 'Europa League',
                    Maranhense: 'Brasil - Campeonato Maranhense',
                    Mato_Grossense: 'Brasil - Campeonato Mato-Grossense',
                    Mineiro: 'Brasil - Campeonato Mineiro',
                    Paraense: 'Brasil - Campeonato Paraense',
                    Paraibano: 'Brasil - Campeonato Paraibano',
                    Paranaense: 'Brasil - Campeonato Paranaense',
                    Paulista___2ª_Divisão: 'Brasil - Campeonato Paulista - Segunda Divisão',
                    Paulista___Série_A1: 'Brasil - Campeonato Paulista - Série A1',
                    Paulista___Série_A2: 'Brasil - Campeonato Paulista - Série A2',
                    Paulista___Série_A3: 'Brasil - Campeonato Paulista - Série A3',
                    Pernambucano: 'Brasil - Campeonato Pernambucano',
                    Piauiense: 'Brasil - Campeonato Piauiense',
                    Português: 'Portugal - Primeira Liga',
                    Potiguar: 'Brasil - Campeonato Potiguar',
                    Rondoniense: 'Brasil - Campeonato Rondoniense',
                    Roraiemense: 'Brasil - Campeonato Roraiemense',
                    Sergipano: 'Brasil - Campeonato Sergipano',
                    Sul_Mato_Grossense: 'Brasil - Campeonato Sul-Mato-Grossense',
                    Taça_Super_Series: 'Taça Series Tour',
                    Tocantinense: 'Brasil - Campeonato Tocantinense'
                },
                no_championship: 'No campeonato en este momento.',
                loading: 'Cargando...',
                match_scheduled: 'Agendado para {{date}}',
                match_finished: 'finalizado en {{date}}',
                match_progress: 'en Curso',
                round: '{{round_number}} rodada',
                stadium: 'Estadio {{stadium}}',
                place: 'lugar: {{place}}',
                time: 'as {{time}}',
                goal_description: '{{goal_time}} minutos de la {{gol_period}} mitad {{goal_extra}}',
                standings : {
                    title: 'Posiciones',
                    team: 'Club',
                    points: 'P',
                    matches: 'JG',
                    victories: 'VI',
                    goal_overall: 'SG'
                }
            })
            .registerAvailableLanguageKeys(['en', 'de', 'pt', 'es'], {
                '*': 'en',
                'en_US': 'en',
                'en_UK': 'en',
                'de_DE': 'de',
                'de_CH': 'de',
                'pt-BR': 'pt',
                'pt_BR': 'pt',
                'pt-PT': 'pt'
            }).determinePreferredLanguage();
    }]);

