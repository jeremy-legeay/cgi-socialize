INSERT INTO public.user(id, name) VALUES (1, 'Guigui');
INSERT INTO public.user(id, name) VALUES (2, 'Alex');
INSERT INTO public.user(id, name) VALUES (3, 'Zak');
INSERT INTO public.user(id, name) VALUES (4, 'Udev');
INSERT INTO public.user(id, name) VALUES (5, 'Oz');
INSERT INTO public.user(id, name) VALUES (6, 'Lou');
INSERT INTO public.user(id, name) VALUES (7, 'Jerem');
INSERT INTO public.user(id, name) VALUES (8, 'Pikachu');

INSERT INTO public.article(id, title, message, author) VALUES (1, 'Nouveauté sur Spring boot', 'Des nouveautés sur spring ca ira plus vite encore...', 1);
INSERT INTO public.article(id, title, message, author) VALUES (2, 'Fitness Park', 'Présentation du projet en salle de sport', 2);
INSERT INTO public.article(id, title, message, author) VALUES (3, 'Angular vs React', 'Que le combat commence', 3);
INSERT INTO public.article(id, title, message, author) VALUES (4, 'Avez vous tout compris ???', 'Je comprends pas vraiment tout tout...', 4);
INSERT INTO public.article(id, title, message, author) VALUES (5, 'Rebelle ? Et alors ?', 'Je ne remplirais pas ma feuille de satisfaction de module', 5);
INSERT INTO public.article(id, title, message, author) VALUES (6, 'Big Boss bientôt', 'Je voudrais passer VP voir plus', 6);
INSERT INTO public.article(id, title, message, author) VALUES (7, 'Mes lunettes ?', 'Je dois faire le front mais où sont mes lunettes, je ne les trouve plus', 7);
INSERT INTO public.article(id, title, message, author) VALUES (8, 'Pika ?', 'Pika pika pika pikachu', 8);

INSERT INTO public.comment(id, message, author, article) VALUES (1, 'Comment 1', 1, 1);
INSERT INTO public.comment(id, message, author, article) VALUES (2, 'Comment 2', 2, 1);
INSERT INTO public.comment(id, message, author, article) VALUES (3, 'Comment 3', 1, 2);
