import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Contact({ theme, toggleTheme }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});

  const [sent, setSent] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    console.log("formData after update (correct):", {
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email looks invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors; // ✅ make sure this line exists
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSent(false);
      return;
    }

    console.log("SEND FORM (demo):", formData);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }
  
  return (
    <div className="flex flex-col min-h-screen">
  <NavBar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow p-10 max-w-3xl mx-auto text-gray-900">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <p className="mb-6 text-lg text-gray-700">
          Have a question or want to work together? Fill out the form below or
          reach me on LinkedIn/GitHub.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message"
              className="w-full p-3 border rounded-lg"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600"
          >
            Send Message
          </button>

          {/* Success */}
          {sent && (
            <p className="text-green-600 font-medium mt-2">
              ✅ Message sent (demo)
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
