/*
  # Create booking requests tracking table

  1. New Tables
    - `booking_requests`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `phone` (text, customer phone)
      - `service` (text, requested service)
      - `date` (text, preferred date)
      - `time` (text, preferred time)
      - `notes` (text, additional notes)
      - `created_at` (timestamp, when request was made)

  2. Security
    - Enable RLS on `booking_requests` table
    - Add policy for public insert (since customers need to submit requests)
    - Add policy for authenticated users to read all data (for admin access)
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  date text NOT NULL,
  time text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert booking requests (customers submitting forms)
CREATE POLICY "Anyone can submit booking requests"
  ON booking_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read all booking requests (for admin/owner access)
CREATE POLICY "Authenticated users can read booking requests"
  ON booking_requests
  FOR SELECT
  TO authenticated
  USING (true);