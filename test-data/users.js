export const validUser = {
    email: 'kamble@test.com',
    password: 'Qwerty@123'
};

export const newUser = () => {
    return {
        firstName: 'John',
        lastName: 'Doe',
        email: `testuser_${Date.now()}@mail.com`,
        telephone: '9876543210',
        password: 'Test@1234'
    };
    
};

export const guestUser = {
  firstName: 'Guest',
  lastName: 'User',
  email: `guest_${Date.now()}@mail.com`,
  telephone: '9876543210',
  address: '123 Test Street',
  city: 'Bangalore',
  postcode: '560001'
};