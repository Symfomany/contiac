package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class UtilisateurTest {

    @Test
    void testDefaultConstructor() {
        Utilisateur u = new Utilisateur();
        assertNull(u.getId());
        assertNull(u.getEmail());
        assertNull(u.getNom());
        assertNull(u.getPrenom());
        assertEquals(0, u.getAge());
        assertFalse(u.isAdmin());
    }

    @Test
    void testFullConstructorAndGetters() {
        Utilisateur u = new Utilisateur("1", "alice@example.com", "Dupont", "Alice", 30, true);
        assertEquals("1", u.getId());
        assertEquals("alice@example.com", u.getEmail());
        assertEquals("Dupont", u.getNom());
        assertEquals("Alice", u.getPrenom());
        assertEquals(30, u.getAge());
        assertTrue(u.isAdmin());
    }

    @Test
    void testSetters() {
        Utilisateur u = new Utilisateur();
        u.setId("2");
        u.setEmail("bob@example.com");
        u.setNom("Martin");
        u.setPrenom("Bob");
        u.setAge(40);
        u.setAdmin(false);

        assertEquals("2", u.getId());
        assertEquals("bob@example.com", u.getEmail());
        assertEquals("Martin", u.getNom());
        assertEquals("Bob", u.getPrenom());
        assertEquals(40, u.getAge());
        assertFalse(u.isAdmin());
    }

    @Test
    void testToStringContainsFields() {
        Utilisateur u = new Utilisateur("3", "carla@example.com", "Bernard", "Carla", 25, false);
        String s = u.toString();
        assertTrue(s.contains("3"));
        assertTrue(s.contains("carla@example.com"));
        assertTrue(s.contains("Bernard"));
        assertTrue(s.contains("Carla"));
        assertTrue(s.contains("25"));
        assertTrue(s.contains("false"));
    }

    @Test
    void testNegativeAgeIsAllowed() {
        Utilisateur u = new Utilisateur();
        u.setAge(-5);
        assertEquals(-5, u.getAge());
    }
}

