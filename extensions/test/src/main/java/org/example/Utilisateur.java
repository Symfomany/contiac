package org.example;

/**
 * Classe représentant un utilisateur avec 5 attributs : id, email, nom, prenom, age
 */
public class Utilisateur {
    private String id;
    private String email;
    private String nom;
    private String prenom;
    private int age;
    private boolean admin;

    /**
     * Constructor por defecto.
     * Crea una instancia vacía de Utilisateur.
     */
    public Utilisateur() {
        this.admin = false;
    }

    /**
     * Constructor completo.
     * @param id Identificador único del usuario
     * @param email Correo electrónico del usuario
     * @param nom Apellido del usuario
     * @param prenom Nombre del usuario
     * @param age Edad del usuario
     * @param admin Indica si el usuario es administrador
     */
    public Utilisateur(String id, String email, String nom, String prenom, int age, boolean admin) {
        this.id = id;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.admin = admin;
    }

    /** Devuelve el id del usuario. */
    public String getId() {
        return id;
    }

    /** Establece el id del usuario. */
    public void setId(String id) {
        this.id = id;
    }

    /** Devuelve el correo electrónico del usuario. */
    public String getEmail() {
        return email;
    }

    /** Establece el correo electrónico del usuario. */
    public void setEmail(String email) {
        this.email = email;
    }

    /** Devuelve el apellido (nom) del usuario. */
    public String getNom() {
        return nom;
    }

    /** Establece el apellido (nom) del usuario. */
    public void setNom(String nom) {
        this.nom = nom;
    }

    /** Devuelve el nombre (prenom) del usuario. */
    public String getPrenom() {
        return prenom;
    }

    /** Establece el nombre (prenom) del usuario. */
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    /** Devuelve la edad del usuario. */
    public int getAge() {
        return age;
    }

    /** Establece la edad del usuario. Debe ser un entero no negativo. */
    public void setAge(int age) {
        this.age = age;
    }

    /** Devuelve true si el usuario es administrador. */
    public boolean isAdmin() {
        return admin;
    }

    /** Establece si el usuario es administrador. */
    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    /** Devuelve una representación en cadena del usuario. */
    @Override
    public String toString() {
        return "Utilisateur{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", age=" + age +
                ", admin=" + admin +
                '}';
    }
}
