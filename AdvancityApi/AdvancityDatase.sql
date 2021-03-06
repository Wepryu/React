USE [AdvancityDemo]
GO
/****** Object:  Table [dbo].[Ders]    Script Date: 28.10.2019 15:43:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Ad] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Ders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DersSinif]    Script Date: 28.10.2019 15:43:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DersSinif](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DersId] [int] NOT NULL,
	[SinifId] [int] NOT NULL,
 CONSTRAINT [PK_DersSinif] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ogrenci]    Script Date: 28.10.2019 15:43:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ogrenci](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[No] [nvarchar](50) NOT NULL,
	[Ad] [nvarchar](50) NOT NULL,
	[Soyad] [nvarchar](50) NOT NULL,
	[Gsm] [nvarchar](50) NULL,
	[Eposta] [nvarchar](100) NULL,
	[Durum] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Ogrenci] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OgrenciDers]    Script Date: 28.10.2019 15:43:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OgrenciDers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OgrenciId] [int] NOT NULL,
	[DersId] [int] NOT NULL,
 CONSTRAINT [PK_OgrenciDers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sinif]    Script Date: 28.10.2019 15:43:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sinif](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Ad] [nvarchar](50) NOT NULL,
	[Kontenjan] [tinyint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Sinif] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ders] ON 

INSERT [dbo].[Ders] ([Id], [Ad], [CreatedDate], [ModifiedDate]) VALUES (1, N'Matematik', CAST(N'2019-10-27T23:49:22.853' AS DateTime), CAST(N'2019-10-28T02:02:49.173' AS DateTime))
INSERT [dbo].[Ders] ([Id], [Ad], [CreatedDate], [ModifiedDate]) VALUES (2, N'Fizik', CAST(N'2019-10-27T23:49:44.200' AS DateTime), CAST(N'2019-10-27T23:49:44.200' AS DateTime))
INSERT [dbo].[Ders] ([Id], [Ad], [CreatedDate], [ModifiedDate]) VALUES (3, N'Kimya', CAST(N'2019-10-27T23:50:33.743' AS DateTime), CAST(N'2019-10-27T23:50:33.743' AS DateTime))
INSERT [dbo].[Ders] ([Id], [Ad], [CreatedDate], [ModifiedDate]) VALUES (4, N'Coğrafya', CAST(N'2019-10-28T02:20:08.420' AS DateTime), CAST(N'2019-10-28T02:21:02.443' AS DateTime))
SET IDENTITY_INSERT [dbo].[Ders] OFF
SET IDENTITY_INSERT [dbo].[Ogrenci] ON 

INSERT [dbo].[Ogrenci] ([Id], [No], [Ad], [Soyad], [Gsm], [Eposta], [Durum], [CreatedDate], [ModifiedDate]) VALUES (1, N'string', N'string', N'string', N'string', N'string', 1, CAST(N'2019-10-27T20:28:11.043' AS DateTime), CAST(N'2019-10-28T01:43:52.570' AS DateTime))
INSERT [dbo].[Ogrenci] ([Id], [No], [Ad], [Soyad], [Gsm], [Eposta], [Durum], [CreatedDate], [ModifiedDate]) VALUES (2, N'g151210306', N'Kemal', N'Kaşık', NULL, NULL, 1, CAST(N'2019-10-27T23:43:54.220' AS DateTime), CAST(N'2019-10-27T23:43:54.290' AS DateTime))
SET IDENTITY_INSERT [dbo].[Ogrenci] OFF
SET IDENTITY_INSERT [dbo].[Sinif] ON 

INSERT [dbo].[Sinif] ([Id], [Ad], [Kontenjan], [CreatedDate], [ModifiedDate]) VALUES (1, N'1102', 56, CAST(N'2019-10-28T02:17:46.380' AS DateTime), CAST(N'2019-10-28T02:19:01.977' AS DateTime))
SET IDENTITY_INSERT [dbo].[Sinif] OFF
ALTER TABLE [dbo].[DersSinif]  WITH CHECK ADD  CONSTRAINT [FK_DersSinif_Ders] FOREIGN KEY([DersId])
REFERENCES [dbo].[Ders] ([Id])
GO
ALTER TABLE [dbo].[DersSinif] CHECK CONSTRAINT [FK_DersSinif_Ders]
GO
ALTER TABLE [dbo].[DersSinif]  WITH CHECK ADD  CONSTRAINT [FK_DersSinif_Sinif] FOREIGN KEY([SinifId])
REFERENCES [dbo].[Sinif] ([Id])
GO
ALTER TABLE [dbo].[DersSinif] CHECK CONSTRAINT [FK_DersSinif_Sinif]
GO
ALTER TABLE [dbo].[OgrenciDers]  WITH CHECK ADD  CONSTRAINT [FK_OgrenciDers_Ders1] FOREIGN KEY([DersId])
REFERENCES [dbo].[Ders] ([Id])
GO
ALTER TABLE [dbo].[OgrenciDers] CHECK CONSTRAINT [FK_OgrenciDers_Ders1]
GO
ALTER TABLE [dbo].[OgrenciDers]  WITH CHECK ADD  CONSTRAINT [FK_OgrenciDers_Ogrenci] FOREIGN KEY([OgrenciId])
REFERENCES [dbo].[Ogrenci] ([Id])
GO
ALTER TABLE [dbo].[OgrenciDers] CHECK CONSTRAINT [FK_OgrenciDers_Ogrenci]
GO
