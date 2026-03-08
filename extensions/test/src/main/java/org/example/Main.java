package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // Message d'accueil
        System.out.println("Hello and welcome!");

        // Création de 5 utilisateurs
        Utilisateur u1 = new Utilisateur("1", "alice@example.com", "Dupont", "Alice", 30, false);
        Utilisateur u2 = new Utilisateur("2", "bob@example.com", "Martin", "Bob", 40, true);
        Utilisateur u3 = new Utilisateur("3", "carla@example.com", "Bernard", "Carla", 25, false);
        Utilisateur u4 = new Utilisateur("4", "dan@example.com", "Petit", "Dan", 35, false);
        Utilisateur u5 = new Utilisateur("5", "emma@example.com", "Moreau", "Emma", 28, true);

        // Affichage des utilisateurs
        Utilisateur[] users = {u1, u2, u3, u4, u5};
        for (Utilisateur u : users) {
            System.out.println(u);
        }
    }
}