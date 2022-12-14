import { supabase } from "../lib/supabaseClient";

export const getGuestData = async () => {
  try {
    let { data, error, status } = await supabase
      .from("guestbook_welsenelene")
      .select(`name,message`)
      .order("created_at", { ascending: false });

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.message);
  } finally {
  }
};

export const sendMessage = async ({ name, message }) => {
  try {
    const addGuest = {
      name,
      message,
      created_at: new Date(),
    };

    let { error } = await supabase
      .from("guestbook_welsenelene")
      .insert(addGuest, {
        returning: "minimal", // Don't return the value after inserting
      });

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  } finally {
  }
};

export const addRSVP = async (name, telephone, confirmation, total_guest) => {
  try {
    const addGuest = {
      name,
      telephone,
      confirmation,
      total_guest,
      created_at: new Date(),
    };

    let { error } = await supabase.from("rsvp_welsenelene").insert(addGuest, {
      returning: "minimal", // Don't return the value after inserting
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  } finally {
  }
};
