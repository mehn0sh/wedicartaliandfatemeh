// pages/api/rsvp.js
import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { full_name, attendance, guest_count } = req.body;

  const { data, error } = await supabase
    .from("rsvp")
    .insert([{ full_name, attendance, guest_count }]);

  if (error)
    return res.status(500).json({ status: "error", message: error.message });

  return res.status(200).json({ status: "success", data });
}