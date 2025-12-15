# Supabase Setup Guide for Waitlist

This guide will help you set up Supabase to persist your waitlist data.

## Why Supabase?

- **Free tier**: Up to 50,000 rows and 500 MB database
- **Easy to set up**: No credit card required for free tier
- **Real-time updates**: Built-in real-time subscriptions
- **PostgreSQL**: Powerful database with full SQL support

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**
3. Fill in:
   - **Name**: `1picday` (or any name you prefer)
   - **Database Password**: Choose a strong password (save it somewhere safe)
   - **Region**: Choose closest to your users
4. Click **"Create new project"** and wait ~2 minutes for setup

## Step 2: Create the Waitlist Table

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Paste this SQL and click **"Run"**:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  use_case TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone
CREATE POLICY "Anyone can insert into waitlist"
ON waitlist FOR INSERT
WITH CHECK (true);

-- Create policy to allow select for authenticated users only (for your admin dashboard)
CREATE POLICY "Authenticated users can view waitlist"
ON waitlist FOR SELECT
USING (auth.role() = 'authenticated');
```

## Step 3: Get Your API Keys

1. Go to **Settings** → **API** (left sidebar)
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")

## Step 4: Add Environment Variables

1. Create a `.env.local` file in your project root (it's already in .gitignore):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

2. Replace the values with your actual Supabase credentials

## Step 5: Deploy to Production

When deploying to Vercel/Netlify/etc, add the same environment variables in your hosting platform's settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Viewing Your Waitlist Data

1. Go to your Supabase dashboard
2. Click **Table Editor** (left sidebar)
3. Select **waitlist** table
4. You'll see all entries with email, use_case, and timestamp

## Exporting Data

To export your waitlist as CSV:
1. Go to **Table Editor** → **waitlist**
2. Click the **"..."** menu (top right)
3. Select **"Export as CSV"**

## Optional: Set up Email Notifications

You can set up Supabase Edge Functions or webhooks to:
- Send confirmation emails to users
- Notify you when someone joins
- Integrate with email marketing tools (Mailchimp, ConvertKit, etc.)

## Troubleshooting

**Error: "Database error"**
- Check that your table is created correctly
- Verify RLS policies are set up

**Error: "Failed to save to database"**
- Check your environment variables are correct
- Verify the anon key has the right permissions

**Fallback Mode**
- If Supabase env vars are missing, the app will use in-memory storage (data lost on restart)
- Check server logs for: `[Waitlist] New entry (in-memory)`

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com/)
