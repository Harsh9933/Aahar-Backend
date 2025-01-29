--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6 (Postgres.app)
-- Dumped by pg_dump version 16.6 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    user_id integer NOT NULL,
    user_name character varying(25) NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    address character varying(150),
    email character varying(50) NOT NULL,
    phone bigint,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_user_id_seq" OWNER TO postgres;

--
-- Name: User_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_user_id_seq" OWNED BY public."User".user_id;


--
-- Name: delivery_partner; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery_partner (
    dp_id integer NOT NULL,
    user_name character varying(20),
    first_name character varying(50),
    last_name character varying(50),
    driving_license text,
    phone integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.delivery_partner OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    user_id integer NOT NULL,
    vendor_id integer,
    delivery_partner_id character varying(30),
    order_type character varying(20),
    quantity integer,
    price integer,
    status character varying(20),
    delivery_address character varying(150),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: transaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction (
    transaction_id integer NOT NULL,
    order_id integer NOT NULL,
    vendor_id integer NOT NULL,
    user_id integer NOT NULL,
    amount integer NOT NULL,
    status character varying(30),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.transaction OWNER TO postgres;

--
-- Name: vendor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendor (
    vendor_id integer NOT NULL,
    owner_name character varying(50),
    company_name character varying(50),
    food_type character varying(50),
    opening_timing timestamp without time zone,
    closing_timing timestamp without time zone,
    aadharcard_number bigint,
    iffsai_image text,
    total_capacity integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.vendor OWNER TO postgres;

--
-- Name: vendor_vendor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vendor_vendor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vendor_vendor_id_seq OWNER TO postgres;

--
-- Name: vendor_vendor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vendor_vendor_id_seq OWNED BY public.vendor.vendor_id;


--
-- Name: User user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN user_id SET DEFAULT nextval('public."User_user_id_seq"'::regclass);


--
-- Name: vendor vendor_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendor ALTER COLUMN vendor_id SET DEFAULT nextval('public.vendor_vendor_id_seq'::regclass);


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (user_id, user_name, first_name, last_name, address, email, phone, created_at, updated_at) FROM stdin;
1	johndoe	John	Doe	123 Main St, Springfield	johndoe@example.com	1234567890	2025-01-30 00:11:08.0803	2025-01-30 00:11:08.0803
2	janedoe	Jane	Doe	456 Oak St, Springfield	janedoe@example.com	9876543210	2025-01-30 00:11:08.0803	2025-01-30 00:11:08.0803
3	alexsmith	Alex	Smith	789 Pine St, Springfield	alexsmith@example.com	1122334455	2025-01-30 00:11:08.0803	2025-01-30 00:11:08.0803
4	emilyjones	Emily	Jones	321 Maple St, Springfield	emilyjones@example.com	5566778899	2025-01-30 00:11:08.0803	2025-01-30 00:11:08.0803
5	michaelbrown	Michael	Brown	654 Birch St, Springfield	michaelbrown@example.com	2233445566	2025-01-30 00:11:08.0803	2025-01-30 00:11:08.0803
\.


--
-- Data for Name: delivery_partner; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.delivery_partner (dp_id, user_name, first_name, last_name, driving_license, phone, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (order_id, user_id, vendor_id, delivery_partner_id, order_type, quantity, price, status, delivery_address, created_at, updated_at) FROM stdin;
1	1	1	DP001	Online	2	100	Completed	123 Main St, Springfield	2025-01-30 00:13:30.640811	2025-01-30 00:13:30.640811
2	2	2	DP002	In-store	3	150	Pending	456 Oak St, Springfield	2025-01-30 00:13:30.640811	2025-01-30 00:13:30.640811
3	3	3	DP003	Online	1	200	Completed	789 Pine St, Springfield	2025-01-30 00:13:30.640811	2025-01-30 00:13:30.640811
4	4	4	DP004	In-store	5	75	Canceled	321 Maple St, Springfield	2025-01-30 00:13:30.640811	2025-01-30 00:13:30.640811
5	5	5	DP005	Online	2	120	Shipped	654 Birch St, Springfield	2025-01-30 00:13:30.640811	2025-01-30 00:13:30.640811
\.


--
-- Data for Name: transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaction (transaction_id, order_id, vendor_id, user_id, amount, status, created_at, updated_at) FROM stdin;
1	1	1	1	100	Success	2025-01-30 00:13:40.175161	2025-01-30 00:13:40.175161
2	2	2	2	150	Pending	2025-01-30 00:13:40.175161	2025-01-30 00:13:40.175161
3	3	3	3	200	Success	2025-01-30 00:13:40.175161	2025-01-30 00:13:40.175161
4	4	4	4	75	Failed	2025-01-30 00:13:40.175161	2025-01-30 00:13:40.175161
5	5	5	5	120	Processing	2025-01-30 00:13:40.175161	2025-01-30 00:13:40.175161
6	1	1	1	100	Success	2025-01-30 00:13:45.671639	2025-01-30 00:13:45.671639
7	2	2	2	150	Pending	2025-01-30 00:13:45.671639	2025-01-30 00:13:45.671639
8	3	3	3	200	Success	2025-01-30 00:13:45.671639	2025-01-30 00:13:45.671639
9	4	4	4	75	Failed	2025-01-30 00:13:45.671639	2025-01-30 00:13:45.671639
10	5	5	5	120	Processing	2025-01-30 00:13:45.671639	2025-01-30 00:13:45.671639
\.


--
-- Data for Name: vendor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendor (vendor_id, owner_name, company_name, food_type, opening_timing, closing_timing, aadharcard_number, iffsai_image, total_capacity, created_at, updated_at) FROM stdin;
1	John Doe	Doe Foods	Fast Food	2025-01-01 10:00:00	2025-01-01 22:00:00	123456789012	iffsai_image_1.png	50	2025-01-30 00:13:06.491383	2025-01-30 00:13:06.491383
2	Jane Smith	Smith Sweets	Desserts	2025-01-01 09:00:00	2025-01-01 20:00:00	987654321098	iffsai_image_2.png	30	2025-01-30 00:13:06.491383	2025-01-30 00:13:06.491383
3	Alex Johnson	Alex's Grill	BBQ	2025-01-01 12:00:00	2025-01-01 23:00:00	112233445566	iffsai_image_3.png	75	2025-01-30 00:13:06.491383	2025-01-30 00:13:06.491383
4	Emily White	White's Bakery	Bakery	2025-01-01 06:00:00	2025-01-01 18:00:00	556677889011	iffsai_image_4.png	40	2025-01-30 00:13:06.491383	2025-01-30 00:13:06.491383
5	Michael Brown	Brown's Café	Coffee	2025-01-01 07:00:00	2025-01-01 21:00:00	223344556677	iffsai_image_5.png	60	2025-01-30 00:13:06.491383	2025-01-30 00:13:06.491383
\.


--
-- Name: User_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_user_id_seq"', 1, false);


--
-- Name: vendor_vendor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendor_vendor_id_seq', 1, false);


--
-- Name: User User_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (user_id);


--
-- Name: delivery_partner delivery_partner_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_partner
    ADD CONSTRAINT delivery_partner_pkey PRIMARY KEY (dp_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: transaction transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (transaction_id);


--
-- Name: vendor vendor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendor
    ADD CONSTRAINT vendor_pkey PRIMARY KEY (vendor_id);


--
-- Name: transaction fk_order; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- Name: orders fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public."User"(user_id);


--
-- Name: transaction fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public."User"(user_id);


--
-- Name: orders fk_vendor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_vendor FOREIGN KEY (vendor_id) REFERENCES public.vendor(vendor_id);


--
-- Name: transaction fk_vendor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT fk_vendor FOREIGN KEY (vendor_id) REFERENCES public.vendor(vendor_id);


--
-- PostgreSQL database dump complete
--

