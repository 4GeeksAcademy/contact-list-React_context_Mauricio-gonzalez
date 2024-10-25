// src/flux.js

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] // Almacena la lista de contactos
		},
		actions: {
			// Cargar contactos desde la API
			loadContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/");
					if (!response.ok) throw new Error("Error al cargar los contactos");
					const data = await response.json();
					setStore({ contacts: data });
				} catch (error) {
					console.error("Error cargando contactos:", error);
				}
			},

			// Agregar un nuevo contacto
			addContact: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact)
					});
					if (response.ok) {
						getActions().loadContacts(); // Recargar contactos después de añadir
					} else {
						throw new Error("Error al agregar contacto");
					}
				} catch (error) {
					console.error("Error agregando contacto:", error);
				}
			},

			// Actualizar un contacto existente
			updateContact: async (contactId, updatedData) => {
				try {
					console.log("Actualizando contacto con ID:", contactId); // Verificar contactId
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(updatedData)
					});
					if (response.ok) {
						getActions().loadContacts(); // Recargar contactos después de actualizar
					} else {
						throw new Error("Error al actualizar contacto");
					}
				} catch (error) {
					console.error("Error actualizando contacto:", error);
				}
			},

			// Eliminar un contacto existente
			deleteContact: async (contactId) => {
				try {
					console.log("Eliminando contacto con ID:", contactId); // Verificar contactId
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
						method: "DELETE"
					});
					if (response.ok) {
						getActions().loadContacts(); // Recargar contactos después de eliminar
					} else {
						throw new Error("Error al eliminar contacto");
					}
				} catch (error) {
					console.error("Error eliminando contacto:", error);
				}
			}
		}
	};
};

export default getState;