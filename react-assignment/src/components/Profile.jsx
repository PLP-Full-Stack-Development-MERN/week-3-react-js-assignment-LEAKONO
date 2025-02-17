export default function Profile({ name, email }) {
    return (
      <div className="border rounded-lg p-4 shadow-md bg-gray-100 text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  }
  